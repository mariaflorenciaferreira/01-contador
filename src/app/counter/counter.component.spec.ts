import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
describe("CounterComponent",()=>{

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CounterComponent],
        }).compileComponents();
    });

    it("se debe crear el componente counter",()=>{
        const fixture=TestBed.createComponent(CounterComponent)

    expect(fixture.componentInstance).toBeTruthy()
    
    })

    it("se debe crear el texto Contador: 23 ",()=>{
        const fixture=TestBed.createComponent(CounterComponent)
        
        // para verificar si cambia algo luego de hacer click
        fixture.detectChanges()

        const compiled: HTMLElement=fixture.nativeElement
       
        expect(compiled.querySelector("h1")?.textContent).toEqual("Contador: 23 ")
    })

    it(
        "valor inicial del contador es 23",()=>{
            const counter= new CounterComponent()

            expect(counter.contador).toBe(23)
        }
    )
})