

  // 1 GB = 1024 ^ 3
import {animate, state, style, transition, trigger} from "@angular/animations";

export const ONE_GIGABYTE = 1073741824;


export const z3Session = "z3Session";


export enum Errors{
  FILE_MAX_LIMIT_EXCEEDED,
  FILE_LIMIT_EXCEEDED,
  DUPLICATE_FILE_EXCEPTION,

  MAX_RECIPIENT_COUNT,
  FILE_UPLOAD_ERROR,
  CUSTOM_ERROR,
  DUPLICATE_RECIPIENT_FOUND,
  TRANSFER_EXPIRED,
  TRANSFER_NOT_AVAILABLE,



  OK

}


export enum RecipientPlan{
  PUBLIC = 5,
  BASIC=7,
  STANDARD = 12,
  PREMIUM = 25
}

export enum ExpiryDatePlan{
  PUBLIC = 7,
  BASIC=14,
}




export function totalSize(files:Array<File>){
  return files.reduce((sum,file)=> sum + file.size,0);
}




const duration = "500ms ease-in-out";

export const AppAnimations = [
  trigger('ScaleAndDisappear',[
    transition(':leave',[
      style({
        height:'*',
        opacity:'1',
        transform:'scale(1.0)'
      }),
      animate(duration,style({
        opacity:'0',
        transform:'scale(1.2)'
      }))
    ]),
    transition(':enter',[
      style({
        opacity:'0',
        transform:'scale(1.2)'
      }),
      animate(duration,style({
        opacity:'1',
        transform:'scale(1.0)'
      }))
    ]),

  ]),
  trigger('SlideUpDown',[
    transition(':leave',[
      style({
        height:'*',
        opacity:'1',
        'max-height':'70px',
      }),
      animate(duration,style({
        opacity:'0',
        'max-height':'0',
      }))
    ]),
    transition(':enter',[
      style({
        height:'*',
        opacity:'0',
        'max-height':'0',
      }),
      animate(duration,style({
        opacity:'1',
        'max-height':'70px',
      }))
    ]),

  ]),
  trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(duration)
    ]),
    transition('* => void', [
      animate(duration, style({ transform: 'translateX(100%)' }))
    ])
  ]),
  trigger("fadeInOut",[
    transition("* => void",[
      style({
        opacity:1
      }),
      animate(duration, style({
        opacity:0
      }))
    ]),
    transition("void => *",[
      style({
        opacity:0
      }),
      animate(duration, style({
        opacity:1
      }))
    ]),
  ]),

  trigger('FadeInAndOut', [
    transition("* => void",[
      style({
        opacity:1
      }),
      animate(duration, style({
        opacity:0
      }))
    ]),
    transition("void => *",[
      style({
        opacity:0
      }),
      animate(duration, style({
        opacity:1
      }))
    ]),
  ]),


  trigger("flyInOutY",[
    transition("* => void",[
      style({
        opacity:1,
        bottom:0
      }),
      animate(duration, style({
        opacity:0,
        bottom:'-100px'
      }))
    ]),
    transition("void => *",[
      style({
        opacity:0,
        bottom:'-100px'
      }),
      animate(duration, style({
        opacity:1,
        bottom:0
      }))
    ])
  ]),


]


export var banners:Array<string> = [
  // "../../../../assets/backdrops/about/backdrop.html",
  "../../../../assets/backdrops/backdrop-1/backdrop.html",
  "../../../../assets/backdrops/backdrop-2/backdrop.html",
  "../../../../assets/backdrops/stories/backdrop.html",
  "../../../../assets/backdrops/offer/backdrop.html",
]

export var promotionStyles = "width: calc(100% - calc(360px + 5em));" +
  "position: fixed;" +
  "left: calc(360px + 5em);" +
  "padding: 0 3em;" +
  "height: 80%;" +
  "z-index: 10;" +
  "margin: auto;" +
  "top: 50%;" +
  "transform: translateY(-50%);" +
  "display: flex;" +
  "flex-direction: column;" +
  "justify-content: start;" +
  "place-items: start;"
