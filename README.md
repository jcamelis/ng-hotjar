## Build Status

![Travis Build Status](https://travis-ci.org/jcamelis/ng-hotjar.svg?branch=master)

## Install

```shell
npm install --save ng-hotjar
```

## Import 

```typescript
import { NgModule } from '@angular/core';

import { HotjarModule } from 'ng-hotjar';

@NgModule({
    ...
    imports: [
        HotjarModule,
        ...
    ]
    ...
})
export class AppModule {}

```

## Instantiate Component

```html
<hotjar tracking-id="xxxxxx" version="6"></hotjar>
```

## Inject Service

```typescript

import { Component } from '@angular/core';
import { HotjarService } from 'ng-hotjar';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>My Component</h1>
            <button (click)="trigerPoll()">Trigger Poll</button>
        </div>
    `
})
export class AppComponent {

    constructor(hotjarService: HotjarService) {}

    public triggerPoll() {
        this.hotjarService.trigger('myPoll');
    }

}

```
