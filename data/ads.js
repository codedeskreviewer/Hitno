const posts = [

    {
        ad_id: 1,
        slug: 'plac',
        ad_featured_img_url: 'https://static-mp.lamudi.com/static/media/bm9uZS9ub25l/2x2x2x380x244/4ae70d8ca70b78.jpg',
        ad_title: 'Hitno prodavam plac od 200m2 vo naselba radishani',
        ad_description: 'Placot e so markica za gradba i e na samata glavna ulica kaj benzinskata Makpetol',
        ad_location: 'Skopje',
        ad_category: 'nedviznini',
        ad_phone: '+3897836629',
        ad_sub_category: 'placevi',
        ad_published_date: 1660647657332,
        product_price: '5,000',
        currency: 'EUR',
        user_id: 1,
        ad_status: 'active',
        ad_views: 214,
        ad_duration_days: 1,

    }, 
    
    {

        ad_id: 2,
        slug: 'stan',
        ad_featured_img_url: 'https://mydomlux.com/wp-content/uploads/2021/02/1-10-1.jpeg',
        ad_title: 'Hitno prodavam stan 72m2 vo strog centar',
        ad_location: 'Skopje',
        ad_description: 'Prodavam stan vo strong centar vo nova zgrada javete se za da go vidite, mnogu ke vi se sviga',
        ad_category: 'Nedviznini',
        ad_phone: '+3897836629',
        ad_sub_category: 'Stanovi',
        ad_published_date: 1660647657332,
        product_price: '52,000',
        currency: 'EUR',
        user_id: 2,
        ad_status: 'active',
        ad_views: 414,
        ad_duration_days: 7,

    },

    {

        ad_id: 3,
        slug: 'saat',
        ad_featured_img_url: 'https://media.gq.com/photos/62606b2df4136258dd497c0a/master/w_2000,h_1333,c_limit/GQ-gshock3.jpg',
        ad_title: 'Hitno prodavam saat Casio vo mnogu dobra sostojba',
        ad_description: 'Prodavam stan vo strong centar vo nova zgrada javete se za da go vidite, mnogu ke vi se sviga',
        ad_location: 'Kumanovo',
        ad_category: 'Nakit',
        ad_phone: '+3897836629',
        ad_sub_category: 'none',
        ad_published_date: 1660647657332,
        product_price: '2,000',
        currency: 'MKD',
        user_id: 3,
        ad_status: 'active',
        ad_views: 414,
        ad_duration_days: 7,

    },

    {

        ad_id: 4,
        slug: '4',
        ad_featured_img_url: 'https://media.gq.com/photos/62606b2df4136258dd497c0a/master/w_2000,h_1333,c_limit/GQ-gshock3.jpg',
        ad_title: 'Hitno prodavam audi A4 2007 godina',
        ad_description: 'Registrirana, vo odlicna sostojba, ja prodavam poradi zaminuvanje vo stranstvo',
        ad_location: 'Tetovo',
        ad_category: 'Motorni vozila',
        ad_phone: '+3897836629',
        ad_sub_category: 'Avtomobili',
        ad_published_date: 1660647657332,
        product_price: '52,000',
        currency: 'EUR',
        user_id: 1,
        ad_status: 'active',
        ad_views: 414,
        ad_duration_days: 7,

    },

];


export function getAllPosts() {
    return posts;
}


export function getAllSlugs() {
    let slugs = [];
    getAllPosts().map((p) => slugs.push(`/ads/${p.slug}`));
    return slugs;
}


export function getPostData(slug) {
    let post = null;
    getAllPosts().map((p) => {
        if (p.slug === slug ) {
            post = p;
            return;
        }
    });
    return post;
}

