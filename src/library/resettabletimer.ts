
export type DelayedFunction = (callback: ()=>void, delayMs: number) => void;

export const ResettableTimer = (): DelayedFunction => {

    let currentTimeout: unknown|null=null;

    return (callback: ()=>void, delayMs: number) => {
        if(currentTimeout !== null) {
            //@ts-ignore
            clearTimeout(currentTimeout);
        }

        currentTimeout=setTimeout(callback, delayMs);
    }
}
