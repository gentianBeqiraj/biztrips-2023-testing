import {render, screen, fireEvent} from '@testing-library/react';
import TripList from "../components/TripList";
import {testTrips} from "../components/api";

const mockAddToWishlist = jest.fn();

describe('TripList Component', () => {
    test('zeigt alle Trips ohne Filter an', () => {
        render(<TripList addToWishlist={mockAddToWishlist} />);

        testTrips.forEach((trip) => {
            expect(screen.getByText(trip.title)).toBeInTheDocument();
        });
    });

    test('zeigt Trips nach Monat gefiltert an', () => {
        render(<TripList addToWishlist={mockAddToWishlist} />);

        fireEvent.change(screen.getByLabelText(/Filter by Month:/), {
            target: { value: '1' },
        });

        const filteredTrips = testTrips.filter(
            (trip) => trip.startTrip[1] === 1
        );
        filteredTrips.forEach((trip) => {
            expect(screen.getByText(trip.title)).toBeInTheDocument();
        });

        const nonFilteredTrips = testTrips.filter(
            (trip) => trip.startTrip[1] !== 1
        );
        nonFilteredTrips.forEach((trip) => {
            expect(screen.queryByText(trip.title)).not.toBeInTheDocument();
        });
    });

    test('zeigt die korrekte Anzahl an Trips nach dem Filter', () => {
        render(<TripList addToWishlist={mockAddToWishlist} />);

        fireEvent.change(screen.getByLabelText(/Filter by Month:/), {
            target: { value: '6' },
        });

        expect(screen.getByText('Found 1 trip for the month of June')).toBeInTheDocument();
    });

    test('fügt einen Trip zur Wunschliste hinzu', () => {
        render(<TripList addToWishlist={mockAddToWishlist} />);

        const addToWishlistButton = screen.getAllByText('Add to Wishlist')[0];
        fireEvent.click(addToWishlistButton);

        expect(mockAddToWishlist).toHaveBeenCalledTimes(1);
        expect(mockAddToWishlist).toHaveBeenCalledWith(testTrips[0]);
    });
});
