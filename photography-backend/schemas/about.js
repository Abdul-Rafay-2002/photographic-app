export default {
    name: 'about',
    title: 'About Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Subtitle Description',
            type: 'string'
        },
        {
            name: 'iconUrl',
            title: 'IconUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}