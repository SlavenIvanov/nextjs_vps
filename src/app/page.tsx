import Capacity from '@/components/tests/capacity';
import DbTest from '@/components/tests/db';
import Images from '@/components/tests/images';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-10 space-y-6">
			<h1 className="font-bold text-xl">👌🐸 🏋️</h1>

			<p>
				Source code:{' '}
				<a
					href="https://github.com/slavenivanov/nextjs_vps"
					target="_blank"
					rel="noreferrer noopener"
					className="underline"
				>
					GitHub
				</a>
			</p>
			<p>
				Original post by Ashley Rudland (
				<a
					className="underline"
					href="https://twitter.com/ashleyrudland/status/1777676883078824151"
					target="_blank"
				>
					x.com
				</a>
				)
			</p>
			<div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
				<DbTest />
				<Capacity />
			</div>
		</main>
	);
}
