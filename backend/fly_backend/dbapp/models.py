from django.db import models

# Create your models here.

class User(models.Model):
    UserID = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=100)
    Email = models.EmailField(unique=True)
    Password = models.CharField(max_length=255)
    PhoneNumber = models.CharField(max_length=15)

    def _str_(self):
        return self.Name


class Flight(models.Model):
    FlightID = models.IntegerField(primary_key=True)
    AirlineName = models.CharField(max_length=100)
    FlightNumber = models.CharField(max_length=20, unique=True)
    Source = models.CharField(max_length=100)
    Destination = models.CharField(max_length=100)
    DepartureTime = models.DateTimeField()
    ArrivalTime = models.DateTimeField()
    TotalSeats = models.IntegerField()
    AvailableSeats = models.IntegerField()
    Price = models.DecimalField(max_digits=10, decimal_places=2)

    def _str_(self):
        return f"{self.AirlineName} ({self.FlightNumber})"


class Booking(models.Model):
    BookingID = models.IntegerField(primary_key=True)
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    FlightID = models.ForeignKey(Flight, on_delete=models.CASCADE)
    BookingDate = models.DateTimeField(auto_now_add=True)
    TravelDate = models.DateField()
    TotalPassengers = models.IntegerField()
    TotalAmount = models.DecimalField(max_digits=10, decimal_places=2)
    BookingStatus = models.CharField(max_length=50)

    def _str_(self):
        return f"Booking {self.BookingID} - {self.BookingStatus}"


class Passenger(models.Model):
    PassengerID = models.IntegerField(primary_key=True)
    BookingID = models.ForeignKey(Booking, on_delete=models.CASCADE)
    Name = models.CharField(max_length=100)
    Age = models.IntegerField()
    Gender = models.CharField(max_length=10)
    SeatNumber = models.CharField(max_length=10)

    def _str_(self):
        return self.Name


class Payment(models.Model):
    PaymentID = models.IntegerField(primary_key=True)
    BookingID = models.ForeignKey(Booking, on_delete=models.CASCADE)
    PaymentDate = models.DateTimeField(auto_now_add=True)
    PaymentMethod = models.CharField(max_length=50)
    PaymentStatus = models.CharField(max_length=50)
    AmountPaid = models.DecimalField(max_digits=10, decimal_places=2)

    def _str_(self):
        return f"Payment {self.PaymentID} - {self.PaymentStatus}"


class QR_Ticket(models.Model):
    TicketID = models.IntegerField(primary_key=True)
    BookingID = models.ForeignKey(Booking, on_delete=models.CASCADE)
    QRCodeData = models.TextField()
    IssuedDate = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return f"Ticket {self.TicketID}"