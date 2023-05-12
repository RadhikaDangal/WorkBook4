<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select List</title>
</head>

<body>
    <h2>Select List from Array</h2>
    <select id="states-list" name="states">
    </select>

    <script>

        function loadStatesList() {
            let statesList = document.getElementById("states-list");
            const states = [
                { name: 'Alabama', abbrev: 'AL' },
                { name: 'Alaska', abbrev: 'AK' },
                { name: 'American Samoa', abbrev: 'AS' },
                { name: 'Arizona', abbrev: 'AZ' },
                { name: 'Arkansas', abbrev: 'AR' },
                { name: 'California', abbrev: 'CA' },
                { name: 'Colorado', abbrev: 'CO' },
                { name: 'Connecticut', abbrev: 'CT' },
                { name: 'Delaware', abbrev: 'DE' },
                { name: 'District of Columbia', abbrev: 'DC' },
                { name: 'Florida', abbrev: 'FL' },
                { name: 'Georgia', abbrev: 'GA' },
                { name: 'Guam', abbrev: 'GU' },
                { name: 'Hawaii', abbrev: 'HI' },
                { name: 'Idaho', abbrev: 'ID' },
                { name: 'Illinois', abbrev: 'IL' },
                { name: 'Indiana', abbrev: 'IN' },
                { name: 'Iowa', abbrev: 'IA' },
                { name: 'Kansas', abbrev: 'KS' },
                { name: 'Kentucky', abbrev: 'KY' },
                { name: 'Louisiana', abbrev: 'LA' },
                { name: 'Maine', abbrev: 'ME' },
                { name: 'Maryland', abbrev: 'MD' },
                { name: 'Massachusetts', abbrev: 'MA' },
                { name: 'Michigan', abbrev: 'MI' },
                { name: 'Minnesota', abbrev: 'MN' },
                { name: 'Mississippi', abbrev: 'MS' },
                { name: 'Missouri', abbrev: 'MO' },
                { name: 'Montana', abbrev: 'MT' },
                { name: 'Nebraska', abbrev: 'NE' },
                { name: 'Nevada', abbrev: 'NV' },
                { name: 'New Hampshire', abbrev: 'NH' },
                { name: 'New Jersey', abbrev: 'NJ' },
                { name: 'New Mexico', abbrev: 'NM' },
                { name: 'New York', abbrev: 'NY' },
                { name: 'North Carolina', abbrev: 'NC' },
                { name: 'North Dakota', abbrev: 'ND' },
                { name: 'Ohio', abbrev: 'OH' },
                { name: 'Oklahoma', abbrev: 'OK' },
                { name: 'Oregon', abbrev: 'OR' },
                { name: 'Pennsylvania', abbrev: 'PA' },
                { name: 'Puerto Rico', abbrev: 'PR' },
                { name: 'Rhode Island', abbrev: 'RI' },
                { name: 'South Carolina', abbrev: 'SC' },
                { name: 'South Dakota', abbrev: 'SD' },
                { name: 'Tennessee', abbrev: 'TN' },
                { name: 'Texas', abbrev: 'TX' },
                { name: 'Utah', abbrev: 'UT' },
                { name: 'Vermont', abbrev: 'VT' },
                { name: 'Virgin Islands', abbrev: 'VI' },
                { name: 'Virginia', abbrev: 'VA' },
                { name: 'Washington', abbrev: 'WA' },
                { name: 'West Virginia', abbrev: 'WV' },
                { name: 'Wisconsin', abbrev: 'WI' },
                { name: 'Wyoming', abbrev: 'WY' },
            ];
            for (const state of states) {
                // let option = document.createElement("option");
                // option.value = state.abbrev;
                // option.textContent = state.name;

                //OR    
                let option = new Option(state.name, state.abbrev)

                statesList.appendChild(option);
            }
        }

        loadStatesList();

    </script>


</body>

</html>