

  // 1 GB = 1024 ^ 3
import {animate, state, style, transition, trigger} from "@angular/animations";

export const ONE_GIGABYTE = 1073741824;


export enum Errors{
  FILE_MAX_LIMIT_EXCEEDED,
  FILE_LIMIT_EXCEEDED,
  DUPLICATE_FILE_EXCEPTION,

  MAX_RECIPIENT_COUNT

}


export enum RecipientPlan{
  PUBLIC = 5,
  BASIC=7,
  STANDARD = 12,
  PREMIUM = 25
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
      ])
    ])
  ]
