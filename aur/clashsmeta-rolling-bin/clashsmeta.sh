#!/usr/bin/bash

XDG_CONFIG_HOME=${XDG_CONFIG_HOME:-~/.config}

if [[ -f "${XDG_CONFIG_HOME}/clashsmeta-flags.conf" ]]; then
    mapfile -t CLASHSMETA_USER_FLAGS <<<"$(grep -v '^#' "${XDG_CONFIG_HOME}/clashsmeta-flags.conf")"
    echo "User flags:" "${CLASHSMETA_USER_FLAGS[@]}"
fi

exec /opt/clashsmeta/clashsmeta "${CLASHSMETA_USER_FLAGS[@]}" "$@"
