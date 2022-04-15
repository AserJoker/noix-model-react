import { IEffect, IModel, useContainer } from "@noix/model";
import React, { ReactNode } from "react";
import { demo } from "./model";
interface IContainer {
  effect: (eff: IEffect) => () => void;
  dispatch: (
    model: string,
    effect: string,
    payload: Record<string, unknown>
  ) => void | Promise<void>;
}
export let _container: IContainer | null = null;
export class Container extends React.Component<{
  models: IModel<any>[];
  children: ReactNode;
}> {
  private _container: IContainer;
  public constructor(props: { models: IModel<any>[]; children: ReactNode }) {
    super(props);
    this._container = useContainer(this.props.models);
  }
  public render(): React.ReactNode {
    return this.props.children;
  }
  public componentDidMount() {
    if (!_container) {
      _container = this._container;
    }
  }
  public componentWillUnmount() {
    if (_container === this._container) {
      _container = null;
    }
  }
}
