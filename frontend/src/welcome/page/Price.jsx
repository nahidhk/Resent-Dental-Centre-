import React from "react";
import Box from "../components/porpos/Box";
import Card from "../components/porpos/Card";

export default function Price() {
    return (
        <Box>
            <div className="flex center medel mobileStup">
                <Card>
                <style>{`
                    .price-list {
                        padding: 20px;
                        background: #f9f9f9;
                        border-radius: 8px;
                    }
                    .price-list h2 {
                        color: #333;
                        margin-bottom: 15px;
                        font-size: 1.5rem;
                    }
                    .price-list ul {
                        list-style: none;
                        padding: 0;
                    }
                    .price-list li {
                        padding: 10px 0;
                        border-bottom: 1px solid #ddd;
                        display: flex;
                        justify-content: space-between;
                        color: #555;
                    }
                    .price-list li:last-child {
                        border-bottom: none;
                    }
                `}</style>
                    <div className="price-list">
                        <h2>Doctor Consultation Fees</h2>
                        <ul>
                            <li>General Checkup: $50</li>
                            <li>Cleaning: $75</li>
                            <li>Filling: $100</li>
                            <li>Root Canal: $300</li>
                            <li>Extraction: $150</li>
                        </ul>
                    </div>
                </Card>
            </div>
        </Box>
    )
}