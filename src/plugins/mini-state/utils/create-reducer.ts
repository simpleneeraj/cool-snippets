// Define a generic Action type
interface Action<T = string> {
  type: T;
  [K: string]: any;
}

// Define a generic AnyAction type
type AnyAction = Action<string>;

// Define a generic Reducer type
type Reducer<S, A extends Action = AnyAction> = (state: S, action: A) => S;

const INVALID_HANDLER_KEYS = ['undefined', 'null'];

export type Handlers<S, A extends Action = AnyAction> = {
  [P in A['type']]: (
    state: S,
    action: Extract<A, { type: P }>
  ) => Exclude<S, undefined>;
};

function validateKeys<S, A extends Action>(handlers: Handlers<S, A>) {
  INVALID_HANDLER_KEYS.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(handlers, key)) {
      throw new Error(`Invalid createReducer handler key: ${key}`);
    }
  });
}

export function createReducer<S, A extends Action = AnyAction>(
  handlers: Handlers<S, A>,
  initialState: Exclude<S, undefined>
): Reducer<S, A> {
  if (
    !handlers ||
    typeof (handlers as Handlers<S, A> | undefined) !== 'object' ||
    Array.isArray(handlers)
  ) {
    throw new Error(
      'Invalid createReducer handlers - must be a string keyed object'
    );
  }

  if (typeof initialState === 'undefined') {
    throw new Error('Invalid createReducer initialState value: undefined');
  }

  validateKeys(handlers);

  return (state: S = initialState, action: A): S => {
    const { type } = action;

    if (Object.prototype.hasOwnProperty.call(handlers, type)) {
      return handlers[type as A['type']](
        state,
        action as Extract<A, { type: A['type'] }>
      );
    }

    return state;
  };
}
