import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CAROUSEL_MENU } from "@/constants";

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
        {CAROUSEL_MENU.map(({ img, name, description, price }) => (
          <CarouselItem key={name} className="tablet:basis-1/2 laptop:basis-1/3">
            <Card>
              <CardContent className="flex flex-col items-center justify-center space-y-4 p-6 text-center">
                <img src={img.src} alt={name} className="w-[225px]" />
                <div className="space-y-2">
                  <h3 className="font-esamanru text-2xl font-medium uppercase text-dark">{name}</h3>
                  <p className="font-esamanru font-normal capitalize text-dark">{description}</p>
                </div>
                <p className="font-gmarket text-3xl font-medium text-third">${price.toFixed(2)}</p>
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
