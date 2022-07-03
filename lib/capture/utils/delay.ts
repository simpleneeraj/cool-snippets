const delay =
  <T>(ms: number) =>
    new Promise<T>(resolve => setTimeout(resolve, ms))

export default delay;
