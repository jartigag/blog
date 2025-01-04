---
    title:  "the unique philosophy behind unix"
    layout: post
    date:    2024-11-09
    permalink: philosophy-behind-unix
    redirect_to: https://escritura.social/jartigag/the-unique-philosophy-behind-unix
    author: jartigag
    image: /assets/images/posts/just_for_fun.jpg
    tag:
    - reflexiones
    - linux
    - unix
    - libro
    mastodonReplies: https://mastodon.social/deck/@jartigag/113452259821048909
    telegramReplies: https://t.me/jartigag_blog/59
---

[https://escritura.social/jartigag/the-unique-philosophy-behind-unix](https://escritura.social/jartigag/the-unique-philosophy-behind-unix)

> What is special about Unix is the set of fundamental ideals that it strives for. It is a clean and beautiful operating system. It avoids special cases. Unix has the notion of processes —a process is anything that does anything. Here’s a simple example. In Unix the shell command, which is what you type to gain entry into the operating system, is not built into the operating system, as with DOS. It’s just a task. Like any other task. It just happens that this task reads from your keyboard and writes back to your monitor. Everything that does something in Unix is a process. You also have files.
This simple design is what intrigued me, and most people, about Unix (well, at least us geeks). Pretty much everything you do in Unix is done with only six basic operations (called “system calls,” because they are the calls you make to the operating system to do things for you). And you can build up pretty much everything from those six basic system calls.
There’s the notion of “fork,” which is one of the fundamental Unix operations. When a process does a fork, it creates a complete copy of itself. That way, you have two copies that are the same. The child copy most often ends up executing another process—replacing itself with a new program. And that’s the second basic operation. Then you have four other basic system calls: open, close, read, and write —all designed to access files. Those six system calls make up the simple operations that comprise Unix.
Sure, there are tons of other system calls to fill in all the details. But once you understand the six basic ones, you understand Unix. Because one of the beauties of Unix is realizing that you don’t need to have complex interfaces to build up something complex. You can build up any amount of complexity from the interactions of simple things. What you do is create channels of communication (called “pipes” in Unix-speak) between simple processes to create complex problem-solving.
An ugly system is one in which there are special interfaces for everything you want to do. Unix is the opposite. It gives you the building blocks that are sufficient for doing everything. That’s what having a clean design is all about.

![Página de "Just for fun: the story of an accidental revolutionary", de Linus Torvalds de David Diamond, en mi tablet](https://imagenes.escritura.social/uploads/jartigag/just_for_fun.jpg)

> It’s the same thing with languages. The English language has twenty-six letters and you can build up everything from those letters. Or you have the Chinese language, in which you have one letter for every single thing you can think of. In Chinese, you start off with complexity, and you can combine complexity in limited ways. That’s more of the VMS approach, to have complex things that have interesting meanings but can’t be used in any other way. It’s also the Windows approach.
Unix, on the other hand, comes with a small-is-beautiful philosophy. It has a small set of simple basic building blocks that can be combined into something that allows for infinite complexity of expression.
This, by the way, is also how physics works. You try and find the fundamental rules that are supposed to be fairly simple. The complexity comes from the many incredible interactions you get from those simple rules, not from any inherent complexity of the rules themselves.
The simplicity of Unix did not just happen on its own. Unix, with its notion of simple building blocks, was painstakingly designed and written by Dennis Richie and Ken Thompson at AT&T’s Bell Labs, And you should absolutely not dismiss simplicity for something easy. It takes design and good taste to be simple.
To go back to the example of human languages: Pictorial writing like Chinese characters and hieroglyphics tend to happen first, and be “simpler,” whereas the building block approach requires far more abstract thinking. In the same way, you should not confuse the simplicity of Unix with a lack of sophistication —quite the reverse.

["Just for fun: the story of an accidental revolutionary" (2002. Linus Torvalds, David Diamond)](https://lectura.social/book/74209/s/just-for-fun)