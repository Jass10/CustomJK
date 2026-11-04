import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '13c819d1c139444cb06f5c36220a8e5e'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '64b530aa4ff94284b82b36bb7415a985'
                    }
                    src_server_jk_custom_ts: {
                        table: 'sys_module'
                        id: 'aceaa7e6fe684d07b782106996692ce3'
                    }
                }
            }
        }
    }
}
