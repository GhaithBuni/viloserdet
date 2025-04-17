"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useBooking from "../hooks/useBooking";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const { getBookings, bookings, loading, error } = useBooking();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/login");
      return;
    }

    getBookings();
  }, [router]);

  return (
    <div className="flex min-h-screen pt-10">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 text-white p-4 pt-20">
        <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
        <ul>
          <li className="mb-2">
            <Link href="/admin/dashboard" className="hover:text-gray-400">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/admin/bookings" className="hover:text-gray-400">
              Flytthjälp Bokningar
            </Link>
          </li>
        </ul>
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            router.push("/login");
          }}
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 mt-20">
        <h1 className="text-3xl mb-4">Admin Dashboard</h1>

        {/* Bookings Section */}
        <section>
          <h2 className="text-2xl mb-4">Flytthjälp Bokningar</h2>
          {loading ? (
            <p>Loading bookings...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Namn</th>
                    <th className="p-2 border">Personnummer</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">telefonnummer</th>
                    <th className="p-2 border">Moving Day</th>
                    <th className="p-2 border">Tid</th>
                    <th className="p-2 border">Address</th>
                    <th className="p-2 border">Ny Address</th>
                    <th className="p-2 border">Meddelande</th>
                    <th className="p-2 border">Rabbat Kod </th>
                    <th className="p-2 border">Total Pris</th>
                    <th className="p-2 border">Postnumer</th>
                    <th className="p-2 border">Storlek</th>
                    <th className="p-2 border">Våning</th>
                    <th className="p-2 border">Byggnads Typ</th>
                    <th className="p-2 border">Parkings Avståndet</th>
                    <th className="p-2 border">Destination Postnumer</th>
                    <th className="p-2 border">Nya Storlek</th>
                    <th className="p-2 border">Nya Våning</th>
                    <th className="p-2 border">Nya Byggnads Typ</th>
                    <th className="p-2 border">Våning</th>
                    <th className="p-2 border">Nya Parkings Avståndet</th>
                    <th className="p-2 border">Packing</th>
                    <th className="p-2 border">Assembly</th>
                    <th className="p-2 border">Disposal</th>
                    <th className="p-2 border">Cleaning</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-gray-100">
                      <td className="p-2 border">{booking._id}</td>
                      <td className="p-2 border">{booking.name}</td>
                      <td className="p-2 border">{booking.personalNumber}</td>
                      <td className="p-2 border">{booking.email}</td>
                      <td className="p-2 border">{booking.phone}</td>
                      <td className="p-2 border">
                        {new Date(booking.movingDay).toLocaleDateString()}
                      </td>
                      <td className="p-2 border">{booking.time}</td>
                      <td className="p-2 border">{booking.address}</td>
                      <td className="p-2 border">{booking.newAddress}</td>
                      <td className="p-2 border">{booking.message}</td>
                      <td className="p-2 border">
                        {booking.rabattKod || "N/A"}
                      </td>
                      <td className="p-2 border">{booking.totalPrice} SEK</td>
                      <td className="p-2 border">{booking.zip}</td>
                      <td className="p-2 border">
                        {booking.houseSpace || "N/A"}
                      </td>
                      <td className="p-2 border">{booking.floorNumber}</td>
                      <td className="p-2 border">
                        {booking.selectedBuilding || "N/A"}
                      </td>
                      <td className="p-2 border">
                        {booking.selectedParking || "N/A"}
                      </td>
                      <td className="p-2 border">{booking.zipTo}</td>
                      <td className="p-2 border">{booking.houseSpaceTo}</td>
                      <td className="p-2 border">{booking.floorNumberTo}</td>
                      <td className="p-2 border">
                        {booking.selectedBuildingTo || "N/A"}
                      </td>
                      <td className="p-2 border">
                        {booking.selectedFloorTo || "N/A"}
                      </td>
                      <td className="p-2 border">
                        {booking.selectedParkingTo || "N/A"}
                      </td>
                      <td className="p-2 border">
                        {booking.selectedPacking || "N/A"}
                      </td>
                      <td className="p-2 border">
                        {booking.selectedAssembly || "N/A"}
                      </td>
                      <td className="p-2 border">
                        {booking.selectedDisposal || "N/A"}
                      </td>
                      <td className="p-2 border">
                        {booking.selectedCleaning || "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No bookings found.</p>
          )}
        </section>
      </main>
    </div>
  );
}
