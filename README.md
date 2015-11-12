# Home Cloud Project
Home Cloud Project Scripts
Copy the following files to /usr/local/bin

- dev2lxc: This script, based in an udev matching word, will update the "autodev.temp" and "config.temp" in the specified folder
The usage is "dev2lxc" "coincidence" "folder":
      # dev2lxc 01:00.0 /var/lib/lxc/test # being 01:00.0 the PCI bus
      # dev2lxc 1-4 /var/lib/lxc/test     # being 1-4 the USB port
      # dev2lxc tty10 /var/lib/lxc/test   # being tty10 the 10th virtual terminal
To check a coincidence word, use the script "findudev"

- egpu: This script is a quirk for the "pcidriver" script to move from propiertary drivers, such as "nvidia" or "catalyst" to "vfio-pci" or viceversa. It depends on the "pcidriver" script and the script needs to be configured to specify the PCI bus of the selected videocard.
      # egpu nvidia
      # egpu vfio-pci

- findudev: Used to find the udev file or files related to a device. Check keywords with "lsusb", "lspci", "lsblk"... . It will give usefull data such the major and the minor numbers.
      # findudev 01:00.0
      # findudev 1-5
      # findudev tty3

- hwlxccfg: Using "dev2lxc" script it will configure "autodev" and "config" files of an existing LXC to grant access to the devices included in the manually added "hwconfig.cfg" file. The usage for the "test" container is:
      # cat /var/lib/lxc/test/hwconfig.cfg
        HW_ACCESS="00:02.0 00:03.0 tty10 1-13"
      # hwlxccfg test

- pcidriver: Specifiying a bus and the target "open-source" driver, it will change the driver if possible/needed. Notice that the script can be configured to blacklist privative drivers that behave poorly when swapped. Usage:
      # pcidriver 01:00.0 nouveau
      # pcidriver 00:1b.0 vfio-pci
