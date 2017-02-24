aegir_aarhus_dk_hacks
=====================


Import translations
-------------------

```
drush --yes pm-download drush_language
drush language-import-translations da $(drush pm-info aegir_aarhus_dk_hacks --fields=path --format=csv)/translations/da/aegir_aarhus_dk_hacks.da.po
```
