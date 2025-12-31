#!/usr/bin/env bash

# ============================================================
#  PyLynx Compatibility Checker
#  Supports:
#    - Debian (latest)
#    - Ubuntu (latest)
#    - macOS 10.16+
#    - x86_64 / amd64 / arm64 / aarch64
#    - RAM >= 1500 MB
#  Works in GUI or terminal automatically
# ============================================================

# ------------------------------------------------------------
# GUI detection
# ------------------------------------------------------------
is_gui() {
    # macOS: Finder launch = no TTY
    if [[ "$OSTYPE" == "darwin"* ]]; then
        [[ ! -t 1 ]] && return 0
    fi

    # Linux: graphical session variables
    if [[ -n "$DISPLAY" || -n "$WAYLAND_DISPLAY" ]]; then
        [[ ! -t 1 ]] && return 0
    fi

    return 1
}

# ------------------------------------------------------------
# GUI message wrapper
# ------------------------------------------------------------
gui_msg() {
    local msg="$1"

    if [[ "$OSTYPE" == "darwin"* ]]; then
        osascript -e "display dialog \"$msg\" buttons {\"OK\"} default button 1"
    else
        if command -v zenity >/dev/null 2>&1; then
            zenity --info --text="$msg"
        else
            echo "$msg"
        fi
    fi
}

# ------------------------------------------------------------
# OS check
# ------------------------------------------------------------
check_os() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "macos"
        return
    fi

    if [[ -f /etc/os-release ]]; then
        . /etc/os-release
        if [[ "$ID" == "debian" || "$ID" == "ubuntu" ]]; then
            echo "linux-supported"
            return
        fi
    fi

    echo "unsupported"
}

# ------------------------------------------------------------
# macOS version check (10.16+)
# ------------------------------------------------------------
check_macos_version() {
    version=$(sw_vers -productVersion | cut -d. -f1,2)
    # Compare floating point versions
    if (( $(echo "$version >= 10.16" | bc -l) )); then
        echo "supported"
    else
        echo "unsupported"
    fi
}

# ------------------------------------------------------------
# CPU architecture check
# ------------------------------------------------------------
check_arch() {
    arch=$(uname -m)
    case "$arch" in
        x86_64|amd64|arm64|aarch64)
            echo "supported"
            ;;
        *)
            echo "unsupported"
            ;;
    esac
}

# ------------------------------------------------------------
# RAM check (>= 1500 MB)
# ------------------------------------------------------------
check_ram() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        ram_mb=$(($(sysctl -n hw.memsize) / 1024 / 1024))
    else
        ram_mb=$(grep MemTotal /proc/meminfo | awk '{print int($2/1024)}')
    fi

    if (( ram_mb >= 1500 )); then
        echo "supported"
    else
        echo "unsupported"
    fi
}

# ------------------------------------------------------------
# Run checks
# ------------------------------------------------------------
OS=$(check_os)
ARCH=$(check_arch)
RAM=$(check_ram)

RESULT="PyLynx Compatibility Check\n\n"

# OS
if [[ "$OS" == "unsupported" ]]; then
    RESULT+="❌ Unsupported OS (PyLynx supports Debian/Ubuntu latest or macOS 10.16+)\n"
elif [[ "$OS" == "macos" ]]; then
    MACOS_VER=$(check_macos_version)
    if [[ "$MACOS_VER" == "unsupported" ]]; then
        RESULT+="❌ macOS version too old (requires 10.16+)\n"
    else
        RESULT+="✔ macOS version OK\n"
    fi
else
    RESULT+="✔ Supported Linux distribution (Debian/Ubuntu)\n"
fi

# Architecture
if [[ "$ARCH" == "unsupported" ]]; then
    RESULT+="❌ Unsupported CPU architecture\n"
else
    RESULT+="✔ CPU architecture OK\n"
fi

# RAM
if [[ "$RAM" == "unsupported" ]]; then
    RESULT+="❌ Not enough RAM (minimum 1.5GB required)\n"
else
    RESULT+="✔ RAM OK\n"
fi

# Final verdict
if [[ "$OS" != "unsupported" && "$ARCH" != "unsupported" && "$RAM" != "unsupported" ]]; then
    if [[ "$OS" == "macos" && "$MACOS_VER" == "unsupported" ]]; then
        RESULT+="\n⚠ System is NOT compatible with PyLynx."
    else
        RESULT+="\n🎉 Your system IS compatible with PyLynx!"
    fi
else
    RESULT+="\n⚠ Your system is NOT compatible with PyLynx."
fi

# ------------------------------------------------------------
# Output mode
# ------------------------------------------------------------
if is_gui; then
    gui_msg "$RESULT"
else
    echo -e "$RESULT"
fi

