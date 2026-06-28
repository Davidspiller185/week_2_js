1.  עוזר לפתוח פיצ'ר חדש שאני לא רוצה למזג אותו עדיין עם הקוד  branch שעובד.
2. . זה הענף שיוצא מהראשיfeature branch  זה הענף הרשאי והmain 
3. חדש זה לא מעתיק את כל קבצי הפרויקט זה קורה רק אחרי  branch  כשיוצרים שמבצעים שינויים וcommits חדשים
4. כל עוד שלא היה מיזוג זה לא ישפיע על הmain
5. git chechkout -b fix/login-error
6. git switch fix/login-error
7. git switch main
8. head מצביע באיזה branch אני עובד כרגע
9. הhead יצביע על הmain שהוא הbranch הפעיל
10. לא נכון head מצביע תמיד על על הbranch הפעיל כרגע
11. כשיש התפצלותdivergence אז זה יכול לגרום לבעייה במיזוג  אם יהיה conflict
12. הפקודה הראשונה לפני מיזוג צריך לעבור לmain git switch main
13. רצף הפקודות git switch main git merge feature/signup-form
14. למחוק branch אחרי מיזוג זה git branch -d feature/signup-form
15. נהוג למחוק branch אחרי מיזוג כיוון שאין בו צורך כבר אחרי מיזוג
16. אם המיזוג יקרה על הBranch הנוכחי אז הוא יתמזג לעצמו ולא יקרה כלום
17. git switch -c feature/notifications
18. git add . git commit -m "add notification"
19. git branch מציג את כל הBranches וליד הנוכחי יופיע *
20. git switch main
21. git switch feature/notifications חוזר לbranch בסוף חוזרים לראשי git awitch main git merge feature/notifications git branch -d feature/notifications
22. העבודה לא הפריעה לשותף כי כל אחד עבד על Branch נפרד
23. אם היינו עובדים על אותו main היה סיכון גדול לconflict
24. שמדובר בשינוי קטן מאוד כמו תיקון שגיאת כתיב מיותר לפתוח branch נפרד

