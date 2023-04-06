export default {
    name: 'hero',
    title: 'Hero Banner',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Main Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Main Description',
            type: 'string'
        },
        {
            name: 'buttontext',
            title: 'Button Text',
            type: 'string'
        },
        {
            name: 'buttonlink',
            title: 'Button Link',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}