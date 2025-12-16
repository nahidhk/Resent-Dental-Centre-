import React, { useEffect, useState } from "react";

import { useRestApi } from "../hooks/getjson/useRestApi";

export default function Home() {
    const usersData = useRestApi("users");



    return (
        <>
            {
                JSON.stringify(usersData)
            }
        </>
    );
}
