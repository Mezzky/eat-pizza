import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MENU_PIZZA } from "@/constants";

export function CarouselMenu() {
  return (
    <Carousel
      className="w-[80%] tablet:w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {MENU_PIZZA.slice(0, 6).map(({ img, name, description }) => (
          <CarouselItem key={name} className="tablet:basis-1/2 laptop:basis-1/3">
            <Card>
              <CardContent className="flex flex-col items-center justify-center space-y-4 p-6 text-center">
                <img src={img.src} alt={name} className="w-[225px]" />
                <div className="space-y-2">
                  <h3 className="font-esamanru text-2xl font-semibold uppercase text-third">
                    {name}
                  </h3>
                  <p className="font-esamanru font-normal capitalize text-dark">{description}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
