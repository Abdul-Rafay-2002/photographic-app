export default {
    name: 'contact',
    title: 'Contact Form',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'subject',
            title: 'Subject',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(11),
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text'
        }
    ]
}