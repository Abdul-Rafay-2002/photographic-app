export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Service Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Service Description',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Service Price',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'Service Feature Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}