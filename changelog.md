# Changelog for npm release

## 1.2.0
- New: Script will now see if 'cat' parameter is vaild (if it is [a,b,c,d,e,f,g]). Request will not be sent if parameter is invaild. (Ref. to note in 1.1.2 below)

## 1.1.2
- New: Script will now test if 'cat' is too long, request will not be sent if parameter's length is invaild (>1).
(Note: for invaild content of 'cat' (category code that do not exist), request will still be sent and will return in 404. Script enhancement will be done in the next few version.)

## 1.1.1
- Updated: Added link to hitokoto API doc in readme
- Fixed: Minor typos in readme and changelog

## 1.1.0
- New: Added option to request hitokoto of a specific category.
- Updated: Keywords in package.json
- Updated: Readme (Usage instructions - Specifying a category)
- Dev: Added extended goal for issue(#1) (See issue(#2))

## 1.0.1
- Fixed: Readme (usage instruction)

## 1.0.0
- Initial Release