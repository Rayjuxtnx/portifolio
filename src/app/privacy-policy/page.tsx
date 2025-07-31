import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full flex-1 flex items-center justify-center py-12 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                <Shield className="w-10 h-10" />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl">Privacy Policy</CardTitle>
            <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
              information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">Information Collection and Use</h3>
                <p>
                    For a better experience, while using our Service, we may require you to provide us with certain
                    personally identifiable information, including but not limited to your name, phone number, and postal
                    address. The information that we collect will be used to contact or identify you.
                </p>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">Log Data</h3>
                <p>
                    We want to inform you that whenever you visit our Service, we collect information that your browser
                    sends to us that is called Log Data. This Log Data may include information such as your computer's
                    Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and
                    date of your visit, the time spent on those pages, and other statistics.
                </p>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">Cookies</h3>
                <p>
                    Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier.
                    These are sent to your browser from the website that you visit and are stored on your computer's hard
                    drive. Our website uses these "cookies" to collect information and to improve our Service. You have
                    the option to either accept or refuse these cookies, and know when a cookie is being sent to your
                    computer.
                </p>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">Changes to This Privacy Policy</h3>
                <p>
                    We may update our Privacy Policy from time to time. Thus, we advise you to review this page
                    periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on
                    this page. These changes are effective immediately, after they are posted on this page.
                </p>
            </div>
            
            <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">Contact Us</h3>
                <p>
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
