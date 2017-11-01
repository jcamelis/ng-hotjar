import {
    Component,
    AfterViewInit,
    ElementRef,
    ViewChild,
    Input
} from '@angular/core';


@Component({
  selector: 'hotjar',
  template: `
    <div #script style.display="none">
        <ng-content></ng-content>
    </div>
`
})
export class HotjarComponent implements AfterViewInit {

    @Input('tracking-id')
    trackingId: string;


    @Input('version')
    version: string = '6';

    @ViewChild('script') script: ElementRef;

    public ngAfterViewInit() {
        if (this.trackingId) {

            if (!window['_hjSettings']) {
                window['_hjSettings'] = {
                    hjid: 675240,
                    hjsv: 6
                }
            };

            this.convertToScript();
        }
    }

    protected getSrc(): string {
        return `//static.hotjar.com/c/hotjar-${this.trackingId}.js?sv=${this.version}`;
    }

    protected convertToScript() {
        const element = this.script.nativeElement;
        const parent = element.parentElement;

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.getSrc();

        parent.parentElement.replaceChild(script, parent);
    }
}
