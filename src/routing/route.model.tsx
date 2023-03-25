import { generatePath, RouteObject } from "react-router-dom";
import { AppRouteDefinition, RouteName, RouteParams } from "./route.types";

export interface IAppRoutesModel {
  nodes: RouteNode[];
  byName: { [key in RouteName]?: RouteNode };
}
export interface AppRoutesModel extends IAppRoutesModel {}

export class AppRoutesModel {
  constructor(options: IAppRoutesModel) {
    Object.assign(this, options);
  }

  static fromRouteDefinitions(
    definitions: AppRouteDefinition[]
  ): AppRoutesModel {
    const nodes = definitions.map((definition) =>
      RouteNode.fromRouteDefinition(definition)
    );

    const byName: { [name in RouteName]?: RouteNode } = {};
    for (const node of nodes) {
      if (node.name !== null) byName[node.name] = node;
    }

    for (const node of nodes) {
      if (node.definition.parent != null && byName[node.definition.parent])
        node.parent = byName[node.definition.parent]!;
    }

    for (const node of nodes) {
      if (node.parent) node.parent.children.push(node);
    }

    return new this({ nodes, byName });
  }

  toRouteObjects(): RouteObject[] {
    return this.nodes
      .filter((node) => !node.definition.parent)
      .flatMap(toRouteObjects);
  }
}

function toRouteObjects(node: RouteNode): RouteObject[] {
  const objects: RouteObject[] = Object.keys(node.definition.path).map(
    (language) => ({
      path: node.definition.path,
      element: node.definition.element,
    })
  );

  if (node.children.length > 0) {
    const children = node.children.flatMap(toRouteObjects);
    for (const object of objects) object.children = children;
  }

  return objects;
}

export interface IRouteNode {
  name: RouteName | null;
  definition: AppRouteDefinition;
  parent: RouteNode | null;
  children: RouteNode[];
}
export interface RouteNode extends IRouteNode {}

export class RouteNode {
  constructor(fields: IRouteNode) {
    Object.assign(this, fields);
  }

  static fromRouteDefinition(definition: AppRouteDefinition): RouteNode {
    return new this({
      name: definition.name,
      definition,
      parent: null,
      children: [],
    });
  }

  get pattern(): string {
    const pattern = this.definition.path;
    if (this.parent) return `${this.parent.pattern}/${pattern}`;
    return pattern;
  }

  getPath({
    params,
    search,
    hash,
  }: {
    params?: RouteParams;
    search?: string[][] | Record<string, string> | string | URLSearchParams;
    hash?: string[][] | Record<string, string> | string | URLSearchParams;
  } = {}) {
    let path = "/";
    path += generatePath(this.pattern, params);

    if (search) {
      const params =
        search instanceof URLSearchParams
          ? search
          : new URLSearchParams(search);
      path += `?${params}`;
    }

    if (hash) {
      const params =
        hash instanceof URLSearchParams ? hash : new URLSearchParams(hash);
      path += `#${params}`;
    }

    return path;
  }
}
