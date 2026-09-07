export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { postTitle, authorName, authorEmail, contentBlocks } = req.body;

        const projectId = "gd6oa01a";
        const dataset = "production";
        
        const token = process.env.SANITY_WRITE_TOKEN;

        if (!token) {
            return res.status(500).json({ success: false, message: 'Server configuration error: Missing token' });
        }

        const sanityApiUrl = `https://${projectId}.api.sanity.io/v2021-10-21/data/mutate/${dataset}`;

        const docData = {
            mutations: [
                {
                    create: {
                        _type: "confess",
                        title: postTitle,
                        publishedAt: new Date().toISOString(),
                        authorName: authorName,
                        authorEmail: authorEmail || "",
                        body: contentBlocks
                    }
                }
            ]
        };

        const response = await fetch(sanityApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(docData)
        });

        const result = await response.json();

        if (response.ok) {
            return res.status(200).json({ success: true, message: 'Gửi tâm tình thành công!' });
        } else {
            return res.status(response.status).json({ success: false, message: result.message || 'Lỗi từ Sanity' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.toString() });
    }
}