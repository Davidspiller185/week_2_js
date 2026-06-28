1.  עותק של הRepository המרוחק ב gitub
remote 
2. origin זה מוסכמה עולמית
3. git יכול להיות שימושי גם בלי remote בשביל לבצע commits branches merge remote זה רק בשביל לשתף עם הgitub
4. git מעצמו לא יודע על קיומו של gitub מבלי remote
5. remote עובד ונצרך בשביל לשתף את הקוד מהמחשב שלי לgitub ושיוכלו לעבוד עליו כמה מפתחים ביחד ברגע שגם להם יהיה להם את אותו קישור לgitub
6. git remote add origin <repository-url>
7. git push -u origin main אם main זה הbranch הראשי
8. push לפני remote זה שגיאה כי הוא לא יודע מי זה הorigin
9. git remote add origin <url> מחבר את המאגר המקומי לשרת המרוחק gitub git push שולח את ההיסטוריה והשינויים אל הremote.
10. קבלת עותק git clone <repository-url> זה יוצר עותק מלא של הrepository כולל הcommits branches
11. git pull מושך את השינויים החדשים ומעדכן את הbranch המקומי
12. git clone זה ליצור עותק של הrepo במחשב שלי git pull זה כבר אחרי שיש repo מקומי ומעדכן את המאגר המקומי עם השינויים החדשים
13. אם לא עושים git pull באופן קבוע אז יתכן מצב שבו בהמפתחים האחרים שינו את הקוד ואז שננסה לדחוף ז ה עלול ליצור conflict לכן טוב לעשות pull ואז יש לי את הגירסה המעודכנת ואז הסיכוי לonflict הוא גודל
14. 2 שיטות ל remote 1:https://github.com/user/my-project.git 2:git@github.com:user/my-project.git
15. ssh keys יוצרים זוג מפתחות מפתח פרטי שנשאר במחשב ומפתח ציבורי שמעלים לgitub וזה יותא מאובטח מהזנת סיסמה כל פעם מחדש
16. PAT זה מחרוזת סודית שgitub נותן למשתמש וזה במקום סיסמה וזה משמש עבור HTTPS
17. שעובדים על כמה מחשבים שונים אז לכל מחשב יש זוג מפתחות משלו לכן צריך ליצור SSH key בכל מחשב ואז להוסיף את המפתח הציבורי של כל מחשב לחשבון הgitub ואז כל אחד מהחשבים יכול להתחבר לgitub שמזהה אותו מיידית.
18. כדי לקבל את הפרויקט למחשב git clone https://github.com/<username>/team-app.git
19. בדיקת חיבור remote git remote -v
20. קבלת עדכונים git pull
21. לשלוח שינויים git push
22. פרויקט אישי חדש my-notes git remote add origin https://github.com/<username>/my-notes.git
23. העלאה ראשונה git push -u origin main אם main זה הראשי או master
24. git clone כשאין עדיין עותק של הפרויקט במחשב 
25. git push git remote add origin  זה שכבר קיים repo מקומי ורוצים לחבר אותו לrepo חדש
26. upstream לקשר בין הbranch המקומי לbranch המתאים בremote וזה רק בפעם הראשונה לאחר מכן בכל push pull הוא יזהה את הRemote והbranch
27. שרוצים לגבות את הקוד באופן קבוע או למנוע אובדן עבודה במקרה של תקלה במחשב או אם אי רוצה לעבוד על אותו פרויקט מכמה מחשבים או שיש עבודה עם עוד מפתחים וצריכים לראות את הקוד עם השינויים  אז עדיף כבר לחבר Remote בתחילת הפרויקט






