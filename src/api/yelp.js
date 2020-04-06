import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer j-omMPjMDxbLHdwYYws1q83uVMiwiv5p-P7-Z4sPJZtL1b0ZUKHqVSLflOU5VFa25SuWh8VWzOnUZJTJgArYqGvqOoFQeSMB3rCGrHqv4aJ_cP24Y5g0dwB8xV-GXnYx'
    }
})

