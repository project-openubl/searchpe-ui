import ReducerRegistry from '../Utilities/ReducerRegistry';

let registry: any;

export function init(...middleware) {
    if (registry) {
        throw new Error('store already initialized');
    }

    registry = new ReducerRegistry({}, [
        ...middleware
    ]);

    //If you want to register all of your reducers, this is good place.
    /*
     *  registry.register({
     *    someName: (state, action) => ({...state})
     *  });
     */
    return registry;
}

export function getStore() {
    return registry.getStore();
}

export function register(...args) {
    return registry.register(...args);
}
