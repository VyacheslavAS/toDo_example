export default function createDecorator(decoratorFunc) {
    return function wrapDecorator(...args) {
        return function decorator(target, name, descriptor) {
            const { get, set, value } = descriptor;
            if (typeof get === 'function') {
                descriptor.get = decoratorFunc(get, ...args);
            } else if (typeof set === 'function') {
                descriptor.set = decoratorFunc(set, ...args);
            } else if (typeof value === 'function') {
                descriptor.value = decoratorFunc(value, ...args);
            }
            return descriptor;
        };
    };
}
