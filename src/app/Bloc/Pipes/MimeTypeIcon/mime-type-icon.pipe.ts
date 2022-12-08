import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MimeTypeIcon'
})
export class MimeTypeIconPipe implements PipeTransform {

  transform(mimeType: any): string {
    return this.getFontAwesomeIconFromMIME(mimeType);
  }

  getFontAwesomeIconFromMIME(mimeType:string) {
    // List of official MIME Types: http://www.iana.org/assignments/media-types/media-types.xhtml
    var icon_classes = {
      // Media
      image: "file-image",
      audio: "file-audio",
      video: "file-video",
      // Documents
      "application/pdf": "file-pdf",
      "application/msword": "file-word",
      "application/vnd.ms-word": "file-word",
      "application/vnd.oasis.opendocument.text": "file-word",
      "application/vnd.openxmlformatsfficedocument.wordprocessingml": "file-word",
      "application/vnd.ms-excel": "file-excel",
      "application/vnd.openxmlformatsfficedocument.spreadsheetml": "file-excel",
      "application/vnd.oasis.opendocument.spreadsheet": "file-excel",
      "application/vnd.ms-powerpoint": "file-powerpoint",
      "application/vnd.openxmlformatsfficedocument.presentationml":"file-powerpoint",
      "application/vnd.oasis.opendocument.presentation": "file-powerpoint",
      "text/plain": "file-alt",
      "text/html": "file-code",
      "application/json": "file-code",
      // Archives
      "application/gzip": "file-archive",
      "application/zip": "file-archive"
    };

    for (var key in icon_classes) {
      if (icon_classes.hasOwnProperty(key)) {
        if (mimeType.search(key) === 0) {
          // Found it
          // @ts-ignore
          return icon_classes[key];
        }
      } else {
        return "file";
      }
    }
  }

}
