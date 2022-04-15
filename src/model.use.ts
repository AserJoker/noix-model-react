import { useEffect, useState } from "react";
import { _container } from "./Container";
export const useModel = <T = null>(token: string) => {
  const [model, path] = token.split("/");
  const [state, setState] = useState<T>();
  useEffect(() => {
    if (_container) {
      return _container.effect({
        model,
        token: path,
        handle: (val: T) => {
          setState(val);
        },
      });
    } else {
      throw new Error("cannot find a exist container");
    }
  }, []);
  return state;
};
