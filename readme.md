# overseer-dash

This is for toggling lights with dash buttons, using [node-dash-button](https://github.com/hortinstein/node-dash-button)

## Config

Create a file named `config.json` and use it like so:

    {
        "overseerServer": "http://some.local.ip.address",
        "buttons": [{
            "mac": "mac:address:of:a:dash:button",
            "groupId": "1"
        }
        ...
        ]
    }

Find the groupId you want in the information logged when overseer starts.
