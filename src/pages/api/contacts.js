import contacts from './data/contacts'
// import skills from './data/contacts'
export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(contacts)
    }

}
