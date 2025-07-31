import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Phillip's creativity and dedication to our project were outstanding. He delivered results that exceeded our expectations.",
    name: "Jane Doe",
    title: "CEO, Shop Za Kenya",
    avatar: "https://placehold.co/100x100.png",
    avatar_fallback: "JD"
  },
  {
    quote: "The new website Phillip designed is not only beautiful but also highly functional. Our booking rates have soared since the launch!",
    name: "John Smith",
    title: "Owner, Clean Sparkle Outlook",
    avatar: "https://placehold.co/100x100.png",
    avatar_fallback: "JS"
  },
  {
    quote: "Working with Phillip was a breeze. His communication is excellent, and his marketing insights were invaluable to our campaign.",
    name: "Emily White",
    title: "Marketing Manager, Mamanina Furniture",
    avatar: "https://placehold.co/100x100.png",
    avatar_fallback: "EW"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          What My Clients Say
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <blockquote className="text-muted-foreground border-l-4 border-primary pl-4 italic mb-6 flex-grow">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person face" />
                          <AvatarFallback>{testimonial.avatar_fallback}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
