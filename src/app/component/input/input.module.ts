import { CommonModule } from "@angular/common";
import { Input, NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { InputComponent } from './input.component';

@NgModule({
    declarations: [InputComponent],
    imports: [CommonModule, IonicModule],
    exports: [InputComponent],
})
export class InputModule {}

