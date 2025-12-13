import React from "react";

export default function Home() {

    const one = [
        { id: 1, address: "ataikula" },
        { id: 2, address: "pabna" }
    ];

    const two = [
        { id: 1, ad_id: 1, name: "nahid" },
        { id: 2, ad_id: 1, name: "rifat" },
        { id: 3, ad_id: 2, name: "keya" },
        { id: 4, ad_id: 2, name: "rafi" }
    ];

    return (
        <div>
            {two.map(item => {
                // 🔹 ad_id দিয়ে address খোঁজা
                const addressObj = one.find(ad => ad.id === item.ad_id);

                return (
                    <p key={item.id}>
                        name: {item.name} <br />
                        address: {addressObj ? addressObj.address : "N/A"}
                    </p>
                );
            })}
        </div>
    );
}
