// Are we supporting the latest in syntax trends ? Let's use an unrelated test to find out.
@decorator
class Unused {
	render() {
		return (
			<>
				<div />
				<div />
			</>
		);
	}
}

I18n.t("welcome, %{name}", { name: name });
