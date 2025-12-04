import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle2, Download, Mail, Calendar, Clock, User, CreditCard } from "lucide-react";
import QRCode from "react-qr-code";

export function Receipt() {
  const receiptData = {
    receiptNumber: "LSB-2025-001847",
    date: "November 13, 2025",
    time: "2:30 PM",
    status: "Paid",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567"
    },
    appointment: {
      date: "November 15, 2025",
      time: "10:00 AM",
      stylist: "Emily Rodriguez"
    },
    services: [
      { name: "Haircut & Style", price: 75.00 },
      { name: "Color Treatment", price: 120.00 },
      { name: "Deep Conditioning", price: 35.00 }
    ],
    payment: {
      method: "Visa ending in 4242",
      subtotal: 230.00,
      tax: 20.70,
      tip: 46.00,
      total: 296.70
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl mb-2">LoStylzBooking</h1>
              <p className="text-violet-100">Your Style, Your Way</p>
            </div>
            <CheckCircle2 className="size-12" />
          </div>
        </div>

        {/* Receipt Info */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Receipt Number</p>
              <p className="font-mono">{receiptData.receiptNumber}</p>
            </div>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              {receiptData.status}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="size-4 text-muted-foreground" />
              <span>{receiptData.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="size-4 text-muted-foreground" />
              <span>{receiptData.time}</span>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Customer Info */}
          <div className="mb-6">
            <h2 className="mb-3 text-muted-foreground text-sm">Customer Information</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="size-4 text-muted-foreground" />
                <span>{receiptData.customer.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" />
                <span className="text-sm">{receiptData.customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{receiptData.customer.phone}</span>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Appointment Details */}
          <div className="mb-6 bg-violet-50 rounded-lg p-4">
            <h2 className="mb-3 text-sm text-violet-900">Appointment Details</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Scheduled Date</p>
                <p>{receiptData.appointment.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Time</p>
                <p>{receiptData.appointment.time}</p>
              </div>
              <div className="col-span-2">
                <p className="text-muted-foreground mb-1">Stylist</p>
                <p>{receiptData.appointment.stylist}</p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Services */}
          <div className="mb-6">
            <h2 className="mb-4 text-muted-foreground text-sm">Services</h2>
            <div className="space-y-3">
              {receiptData.services.map((service, index) => (
                <div key={index} className="flex justify-between items-start">
                  <span>{service.name}</span>
                  <span className="font-mono">${service.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Payment Summary */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-mono">${receiptData.payment.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax (9%)</span>
              <span className="font-mono">${receiptData.payment.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tip (20%)</span>
              <span className="font-mono">${receiptData.payment.tip.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span className="font-mono">${receiptData.payment.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <CreditCard className="size-4 text-muted-foreground" />
              <span className="text-muted-foreground">Payment Method:</span>
              <span>{receiptData.payment.method}</span>
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white border rounded-lg p-6 mb-6 flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-3">Scan for Receipt Details</p>
            <QRCode 
              value={`https://lostylzbooking.com/receipt/${receiptData.receiptNumber}`}
              size={128}
              level="M"
            />
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="size-4" />
              Download PDF
            </Button>
            <Button className="gap-2 bg-violet-600 hover:bg-violet-700">
              <Mail className="size-4" />
              Email Receipt
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Thank you for choosing LoStylzBooking!</p>
            <p className="mt-1">Questions? Contact us at support@lostylzbooking.com</p>
          </div>
        </div>
      </Card>
    </div>
  );
}