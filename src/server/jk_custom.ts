import '@servicenow/sdk/global'
import { Table, StringColumn, MultiLineTextColumn, DateColumn, Form, default_view } from '@servicenow/sdk/core'

export const x_2195039_jk_custo_jk_custom = Table({
    name: 'x_2195039_jk_custo_jk_custom',
    label: 'JK Custom',
    display: 'name',
    schema: {
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 100 }),
        description: MultiLineTextColumn({ label: 'Description', maxLength: 4000 }),
        expired_date: DateColumn({ label: 'Expired Date' }),
    },
})

Form({
    table: 'x_2195039_jk_custo_jk_custom',
    view: default_view,
    sections: [
        {
            caption: 'General',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'name', type: 'table_field' },
                        { field: 'expired_date', type: 'table_field' },
                        { field: 'description', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
