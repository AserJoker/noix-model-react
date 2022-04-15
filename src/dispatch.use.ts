import { _container } from "./Container";

export const useDispatch = (token: string) => {
  const [model, effect] = token.split("/");
  return (payload: Record<string, unknown> = {}) => {
    if (_container) {
      return _container.dispatch(model, effect, payload);
    } else {
        throw new Error('cannot find a exist container');
    }
  };
};
