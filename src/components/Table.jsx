import react from "react";


export default function Table() {
    return (
        <>
            <div className="table_component" role="region" tabIndex={0}>
                <table>
                    <caption>Table 1</caption>
                    <thead>
                        <tr>
                            <th>Header 1</th>
                            <th>Header 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}