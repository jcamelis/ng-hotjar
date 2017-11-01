
import { Injectable } from '@angular/core';

@Injectable()
export class HotjarService {
    

    public getInstance() {
        return window['hj'] = window['hj'] || this.getHotjarQueue();
    }

    public trigger(eventName: string) {
        this.getInstance()('trigger', eventName);
    }

    private getHotjarQueue() {
        return function() {
            console.log('..:: HOTJAR EVENT PUSHED IN QUEUE ::..', arguments);
            (window['hj']['q'] = window['hj']['q'] || []).push(arguments);
        };
    }
}
