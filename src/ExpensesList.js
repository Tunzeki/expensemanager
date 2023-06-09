const employeeExpenses = [
    {
        id: 1,
        createdAt: "03/09/2023",
        merchant: "Hotel",
        total: 87.08,
        status: "In Progress",
        comment: "Expense from my business trip",
    },
    {
        id: 2,
        createdAt: "03/09/2023",
        merchant: "Hotel",
        total: 635.50,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 3,
        createdAt: "03/09/2023",
        merchant: "Electronics",
        total: 198.26,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 4,
        createdAt: "03/09/2023",
        merchant: "Office supplies",
        total: 72.43,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 5,
        createdAt: "03/09/2023",
        merchant: "Rental car",
        total: 120.40,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 6,
        createdAt: "03/09/2023",
        merchant: "Fast food",
        total: 48.21,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 7,
        createdAt: "03/09/2023",
        merchant: "Taxi",
        total: 441.99,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 8,
        createdAt: "03/09/2023",
        merchant: "Airline",
        total: 400.12,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 9,
        createdAt: "03/09/2023",
        merchant: "Parking",
        total: 294.61,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 10,
        createdAt: "03/09/2023",
        merchant: "Office supplies",
        total: 160.45,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 11,
        createdAt: "03/09/2023",
        merchant: "Office supplies",
        total: 250.65,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 12,
        createdAt: "03/09/2023",
        merchant: "Fast food",
        total: 172.92,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 13,
        createdAt: "03/08/2023",
        merchant: "Fast food",
        total: 292.07,
        status: "New",
        comment: "Expense from my business trip",
    },
    {
        id: 14,
        createdAt: "03/08/2023",
        merchant: "Electronics",
        total: 381.02,
        status: "New",
        comment: "Expense from my business trip",
    },
    {
        id: 15,
        createdAt: "03/08/2023",
        merchant: "Rental car",
        total: 373.53,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 16,
        createdAt: "03/08/2023",
        merchant: "Fast food",
        total: 69.92,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 17,
        createdAt: "03/08/2023",
        merchant: "Office supplies",
        total: 169.64,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 18,
        createdAt: "03/08/2023",
        merchant: "Fast food",
        total: 304.46,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 19,
        createdAt: "03/08/2023",
        merchant: "Hotel",
        total: 217.66,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 20,
        createdAt: "03/08/2023",
        merchant: "Hotel",
        total: 260.91,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 21,
        createdAt: "03/08/2023",
        merchant: "Shuttle",
        total: 191.18,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 22,
        createdAt: "03/08/2023",
        merchant: "Airline",
        total: 224.06,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 23,
        createdAt: "03/08/2023",
        merchant: "Shuttle",
        total: 171.22,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 24,
        createdAt: "03/08/2023",
        merchant: "Office supplies",
        total: 804.05,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 25,
        createdAt: "03/08/2023",
        merchant: "Electronics",
        total: 115.40,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 26,
        createdAt: "03/08/2023",
        merchant: "Hotel",
        total: 253.73,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 27,
        createdAt: "03/08/2023",
        merchant: "Taxi",
        total: 201.97,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 28,
        createdAt: "03/08/2023",
        merchant: "Breakfast",
        total: 771.31,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 29,
        createdAt: "03/07/2023",
        merchant: "Restaurant",
        total: 606.55,
        status: "New",
        comment: "Expense from my business trip",
    },
    {
        id: 30,
        createdAt: "03/07/2023",
        merchant: "Office supplies",
        total: 290.23,
        status: "In Progress",
        comment: "Expense from my business trip",
    },
    {
        id: 31,
        createdAt: "03/07/2023",
        merchant: "Ride sharing",
        total: 141.32,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 32,
        createdAt: "03/07/2023",
        merchant: "Rental car",
        total: 220.24,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 33,
        createdAt: "03/07/2023",
        merchant: "Ride sharing",
        total: 290.65,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 34,
        createdAt: "03/07/2023",
        merchant: "Fast food",
        total: 474.62,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 35,
        createdAt: "03/07/2023",
        merchant: "Restaurant",
        total: 13.81,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 36,
        createdAt: "03/07/2023",
        merchant: "Office supplies",
        total: 82.05,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 37,
        createdAt: "03/07/2023",
        merchant: "Restaurant",
        total: 453.50,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 38,
        createdAt: "03/07/2023",
        merchant: "Fast food",
        total: 158.74,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 39,
        createdAt: "03/07/2023",
        merchant: "Restaurant",
        total: 183.20,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 40,
        createdAt: "03/07/2023",
        merchant: "Breakfast",
        total: 211.25,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 41,
        createdAt: "03/07/2023",
        merchant: "Ride sharing",
        total: 43.22,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 42,
        createdAt: "03/07/2023",
        merchant: "Fast food",
        total: 520.20,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 43,
        createdAt: "03/06/2023",
        merchant: "Office supplies",
        total: 536.26,
        status: "In Progress",
        comment: "Expense from my business trip",
    },
    {
        id: 44,
        createdAt: "03/06/2023",
        merchant: "Restaurant",
        total: 19.46,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 45,
        createdAt: "03/06/2023",
        merchant: "Taxi",
        total: 778.15,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 46,
        createdAt: "03/06/2023",
        merchant: "Shuttle",
        total: 16.24,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 47,
        createdAt: "03/06/2023",
        merchant: "Rental car",
        total: 188.93,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 48,
        createdAt: "03/06/2023",
        merchant: "Ride sharing",
        total: 235.03,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 49,
        createdAt: "03/06/2023",
        merchant: "Fast food",
        total: 179.62,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 50,
        createdAt: "03/06/2023",
        merchant: "Airline",
        total: 578.37,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 51,
        createdAt: "03/06/2023",
        merchant: "Breakfast",
        total: 215.41,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 52,
        createdAt: "03/06/2023",
        merchant: "Parking",
        total: 27.41,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 53,
        createdAt: "03/06/2023",
        merchant: "Fast food",
        total: 379.16,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 54,
        createdAt: "03/06/2023",
        merchant: "Taxi",
        total: 722.08,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 55,
        createdAt: "03/05/2023",
        merchant: "Shuttle",
        total: 17.22,
        status: "New",
        comment: "Expense from my business trip",
    },
    {
        id: 56,
        createdAt: "03/05/2023",
        merchant: "Rental car",
        total: 16.87,
        status: "In Progress",
        comment: "Expense from my business trip",
    },
    {
        id: 57,
        createdAt: "03/05/2023",
        merchant: "Fast food",
        total: 126.54,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 58,
        createdAt: "03/05/2023",
        merchant: "Fast food",
        total: 27.56,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 59,
        createdAt: "03/05/2023",
        merchant: "Ride sharing",
        total: 126.35,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 60,
        createdAt: "03/05/2023",
        merchant: "Airline",
        total: 280.90,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 61,
        createdAt: "03/05/2023",
        merchant: "Taxi",
        total: 315.53,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 62,
        createdAt: "03/05/2023",
        merchant: "Parking",
        total: 26.53,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 63,
        createdAt: "03/05/2023",
        merchant: "Office supplies",
        total: 38.45,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 64,
        createdAt: "03/05/2023",
        merchant: "Ride sharing",
        total: 452.56,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 65,
        createdAt: "03/05/2023",
        merchant: "Taxi",
        total: 65.94,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 66,
        createdAt: "03/05/2023",
        merchant: "Restaurant",
        total: 805.45,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 67,
        createdAt: "03/05/2023",
        merchant: "Breakfast",
        total: 502.87,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 68,
        createdAt: "03/05/2023",
        merchant: "Electronics",
        total: 188.85,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 69,
        createdAt: "03/05/2023",
        merchant: "Hotel",
        total: 49.07,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 70,
        createdAt: "03/04/2023",
        merchant: "Fast food",
        total: 192.47,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 71,
        createdAt: "03/04/2023",
        merchant: "Restaurant",
        total: 275.29,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 72,
        createdAt: "03/04/2023",
        merchant: "Fast food",
        total: 294.97,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 73,
        createdAt: "03/04/2023",
        merchant: "Airline",
        total: 12.21,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 74,
        createdAt: "03/04/2023",
        merchant: "Restaurant",
        total: 493.69,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 75,
        createdAt: "03/04/2023",
        merchant: "Fast food",
        total: 24.82,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 76,
        createdAt: "03/04/2023",
        merchant: "Fast food",
        total: 136.93,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 77,
        createdAt: "03/04/2023",
        merchant: "Hotel",
        total: 471.91,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 78,
        createdAt: "03/04/2023",
        merchant: "Fast food",
        total: 490.60,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 79,
        createdAt: "03/03/2023",
        merchant: "Shuttle",
        total: 75.76,
        status: "New",
        comment: "Expense from my business trip",
    },
    {
        id: 80,
        createdAt: "03/03/2023",
        merchant: "Breakfast",
        total: 493.80,
        status: "New",
        comment: "Expense from my business trip",
    },
    {
        id: 81,
        createdAt: "03/03/2023",
        merchant: "Parking",
        total: 354.02,
        status: "In Progress",
        comment: "Expense from my business trip",
    },
    {
        id: 82,
        createdAt: "03/03/2023",
        merchant: "Office supplies",
        total: 684.58,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 83,
        createdAt: "03/03/2023",
        merchant: "Airline",
        total: 363.27,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 84,
        createdAt: "03/03/2023",
        merchant: "Hotel",
        total: 219.47,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 85,
        createdAt: "03/03/2023",
        merchant: "Rental car",
        total: 431.19,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 86,
        createdAt: "03/03/2023",
        merchant: "Breakfast",
        total: 90.69,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 87,
        createdAt: "03/03/2023",
        merchant: "Parking",
        total: 10.89,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 88,
        createdAt: "03/03/2023",
        merchant: "Shuttle",
        total: 809.37,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 89,
        createdAt: "03/03/2023",
        merchant: "Taxi",
        total: 336.25,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 90,
        createdAt: "03/03/2023",
        merchant: "Electronics",
        total: 30.48,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 91,
        createdAt: "03/03/2023",
        merchant: "Ride sharing",
        total: 263.66,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 92,
        createdAt: "03/03/2023",
        merchant: "Fast food",
        total: 152.48,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 93,
        createdAt: "03/03/2023",
        merchant: "Rental car",
        total: 84.97,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 94,
        createdAt: "03/03/2023",
        merchant: "Taxi",
        total: 110.13,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 95,
        createdAt: "03/03/2023",
        merchant: "Ride sharing",
        total: 648.88,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 96,
        createdAt: "03/02/2023",
        merchant: "Taxi",
        total: 179.50,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 97,
        createdAt: "03/02/2023",
        merchant: "Breakfast",
        total: 69.50,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 98,
        createdAt: "03/02/2023",
        merchant: "Breakfast",
        total: 287.35,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 99,
        createdAt: "03/02/2023",
        merchant: "Parking",
        total: 84.21,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
    {
        id: 100,
        createdAt: "03/02/2023",
        merchant: "Breakfast",
        total: 635.66,
        status: "Reimbursed",
        comment: "Expense from my business trip",
    },
];

export default employeeExpenses;